while true
do
   if acpi -a | grep off-line > /dev/null; then
       xsetroot -name "Bat. $( acpi -b | awk '{ print $4 " " $5 }' | tr -d ',' ) | Vol. $(amixer get Master | tail -1 | awk '{ print $5}' | tr -d '[]') | $(date +"%a, %b %d %R")"
   else
       xsetroot -name "Vol. $(amixer get Master | tail -1 | awk '{ print $5}' | tr -d '[]') | $(date +"%a, %b %d %R")"
   fi
   sleep 1s   
done &
