#!/bin/sh

B='#00000033'  # blank
C='#ffffff22'  # clear ish
D='#eeeeeecc'  # default
T='#ffffffee'  # text
W='#555555bb'  # wrong
V='#aaaaaabb'  # verifying

# ./x86_64-pc-linux-gnu/i3lock \
/usr/bin/i3lock       \
--insidevercolor=$C   \
--ringvercolor=$V     \
\
--insidewrongcolor=$C \
--ringwrongcolor=$W   \
\
--insidecolor=$B      \
--ringcolor=$D        \
--linecolor=$B        \
--separatorcolor=$D   \
\
--verifcolor=$T        \
--wrongcolor=$T        \
--timecolor=$T        \
--datecolor=$T        \
--layoutcolor=$T      \
--keyhlcolor=$W       \
--bshlcolor=$W        \
\
--screen 1            \
--blur 15              \
--clock               \
--indicator           \
--timestr="%H:%M:%S"  \
--datestr="%A, %m %Y" \
--keylayout 2         \
--veriftext="Verify"  \
--wrongtext="No"      \
--time-font="Helvetica Neue LT Std" \
--date-font="Helvetica Neue LT Std"
# --textsize=20
# --modsize=10
# --datefont=monofur
# etc
