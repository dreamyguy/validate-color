#!/bin/bash

# Do something after 'build-npm' is done

# Copy the intended component file the project's index / entrypoint
echo '🎈 build-npm was completed'
echo '🎯 Copy type definitions to lib/'
cp src/validate-color/index.d.ts lib/index.d.ts
