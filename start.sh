#!/bin/bash

echo "🐢 Starting Turtle Packages Monorepo..."
echo ""
echo "Installing dependencies..."
bun install

echo ""
echo "Starting Storybook in development mode..."
echo "Will open automatically at http://localhost:6006"
echo ""

bun dev