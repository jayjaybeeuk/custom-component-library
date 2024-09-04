#!/bin/sh
set -x
set -e

# remove lib contents
rm -rf lib

cross-env NODE_ENV=production rollup -c ./rollup.config.js

# copy images
if [ -d "src/img" ]; then
  cp -R src/img lib/img
fi
