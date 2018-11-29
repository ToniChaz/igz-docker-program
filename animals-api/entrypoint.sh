#!/bin/bash
set -e
case "$1" in
    dev)
        echo "Running Development Server"
        exec npm run start:dev
        ;;
    prod)
        echo "Running Test"
        exec npm test
        ;;
    *)
        echo "Env not available"
esac
