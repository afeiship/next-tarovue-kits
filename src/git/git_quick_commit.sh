#!/usr/bin/env bash

PWD=$0;
MSG=$1;

git add --all;
git commit -m "$MSG";
git push;
