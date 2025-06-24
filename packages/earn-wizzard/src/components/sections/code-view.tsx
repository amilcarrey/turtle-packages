import { Check, Code, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface CodeViewProps {
  jsonOutput: string;
}

export function CodeView({ jsonOutput }: CodeViewProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col p-6">
      {/* Header with Copy Button */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Code className="w-5 h-5" />
          Generated Configuration
        </h3>
        <Button
          variant="secondary"
          size="sm"
          onClick={copyToClipboard}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* JSON Display */}
      <div className="flex-1 relative overflow-hidden rounded-lg border bg-zinc-950 dark:bg-zinc-900">
        <ScrollArea className="h-full">
          <pre className="p-4 text-sm text-green-400 font-mono whitespace-pre-wrap">
            {jsonOutput}
          </pre>
        </ScrollArea>

        {/* Language badge */}
        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-400 rounded">
          JSON
        </div>
      </div>
    </div>
  );
}
