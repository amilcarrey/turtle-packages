export function toNumber(value?: string | number, def = 0): number {
  if (value === undefined) {
    return def;
  }

  try {
    const val = Number.parseFloat(value.toString());

    if (Number.isNaN(val)) {
      return def;
    }

    return val;
  }
  catch (e: unknown) {
    return def;
  }
}

export function min(...vals: number[]): number {
  let smallest = Number.MAX_VALUE;

  for (const val of vals) {
    if (val >= smallest) {
      continue;
    }

    smallest = val;
  }

  return smallest;
}

export function removeZeros(val: string | number): string {
  const str = val.toString();
  const parts = str.split(".");

  if (parts.length < 2)
    return str;

  const [start, decimals] = parts;

  let depth = decimals.length;

  for (let i = decimals.length - 1; i >= 0; i--) {
    if (decimals[i] !== "0")
      break;

    depth--;
  }

  const newDecimals = decimals.slice(0, depth);

  return `${start}${newDecimals.length > 0 ? `.${newDecimals}` : ""}`;
}

const magnitudeMap = ["k", "m", "b", "t", "q", "qq", "qqq", "qqqq", "qqqqq", "qqqqqq", "qqqqqqq", "qqqqqqqq"];

export function numberScale(
  val: string | number,
  decimals: number,
): [number, string] {
  const num = toNumber(val);
  const magnitude = Math.floor(min(Math.log10(num) / 3, magnitudeMap.length));
  if (magnitude < 1) {
    return [num, ""] as const;
  }
  return [Number.parseFloat((num / 10 ** (magnitude * 3)).toFixed(decimals)), magnitudeMap[magnitude - 1]] as const;
}

export function formatNumber(
  val: string | number,
  decimals = 2,
  doScale = false,
  zeros = true,
): string {
  if (typeof val === "string") {
    val = toNumber(val);
  }

  val = val.toFixed(decimals);

  let [value, suffix] = [val, ""];

  if (doScale) {
    let new_value;
    [new_value, suffix] = numberScale(val, decimals);
    value = new_value.toString();
  }

  let result = `${value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;

  if (!zeros) {
    result = removeZeros(result);
  }

  return result;
}

export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}