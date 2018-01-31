#!/bin/bash
for f in venue-koonjewarre/*
do
  convert $f -quality 50 ../source/images/$f
done
