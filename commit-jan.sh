#!/bin/bash

# Jan 10 to Jan 28 (one commit per day)

dates=("2025-01-10" "2025-01-11" "2025-01-12" "2025-01-13" "2025-01-14" "2025-01-15" "2025-01-16" "2025-01-17" "2025-01-18"
       "2025-01-19" "2025-01-20" "2025-01-21" "2025-01-22" "2025-01-23" "2025-01-24" "2025-01-25" "2025-01-26" "2025-01-27" "2025-01-28")

for date in "${dates[@]}"
do
  echo "commit for $date" >> progress.txt
  git add .
  GIT_COMMITTER_DATE="$date 12:00:00" git commit --date="$date 12:00:00" -m "Backdated commit for $date"
done
