# Linux

---

# Dotfiles management

Use [YADM](https://yadm.io)

## Replace string in files

    ack -l "string_to_replace" | xargs -d '\n' sed -i -e 's/string_to_replace/new_string/g'

## Delete string in files

    ack -l "string_to_delete" | xargs -d '\n' sed -i -e '/string_to_delete/d'

## Find differences in folders & exclude 1 directory

    diff --brief --r dir1 dir2 | grep -v path

## Slow startup

    `systemd-analyze` to see time to boot.
    `systemd-analyze critical-chain` to see what's taking a long time.

    `dmesg` to see driver log

## Check SSD health

    sudo smartctl -t short -a /dev/nvme0n1p5

## Convert PNG to JPG (batch)

```
mogrify -format jpg *.png && rm *.png
```

## Resize image

```
mogrify -quality 60% -resize 1800px
```

## Bulk resize all jpg in folder

```
    find . -name '*.jpg' -exec mogrify -quality 60% --resize 1024px -format jpg {} +
```

## Optimize JPEG

```
jpegoptim  --size=750k filename.jpeg
```

## Create GIF from MP4

Use `peek` to capture mp4. Then convert using gifify.

```
gifify filename.mp4 -o filename.gif --fps 15 --resize 400:-1
```

## Add 100ms delay at the end of GIF

```
convert filename.gif \( +clone -set delay 100 \) +swap +delete newFilename.gif
```

## python

Split video into parts of 10 seconds.

Useful for Instagram stories.

```
ffmpeg -i input.mp4 -c copy -map 0 -segment_time 8 -f segment -reset_timestamps 1 output%03d.mp4
```

## Youtube download channel videos

```
youtube-dl --download-archive archive.txt "https://www.youtube.com/channel/UC0QHWhjbe5fGJEPz3sVb6nw"
```

## Youtube download subtitle only

```
youtube-dl --sub-lang en --write-sub --write-auto-sub --write-info-json --download-archive archive.txt --skip-download "https://www.youtube.com/user/unboxtherapy" -i
```

## Youtube download MP3 only

```
youtube-dl --extract-audio --audio-format mp3 <video URL>
```

## Wistia video

```
youtube-dl http://fast.wistia.net/embed/iframe/5uc3n95v11
```

## NPM check outdated

    npm outdated

## NPM Update all packages to latest

    npm i -g npm-check-updates
    ncu -u -a

## Pacman fix update file conflict

    sudo pacman -Syu --ignore <package_name>

    sudo pacman -S --force <package_name>

## Find and replace string in file name

```
rename 'findString' 'replaceString' *
```

## Find and replace string in files in current directory

```
find ./ -type f -exec sed -i -e 's/findString/replaceString/g' {} \;
```

## GPG

### List keys

`gpg --list-secret-keys`
`gpg --list-keys`

### Export & import

```
gpg --export -a Shawn > shawn_public.key
gpg --import shawn_public.key
```

### Encrypt folder

```
gpgtar -e -o outputName -r shawn ./folderToEncrypt
gpgtar -C dir_to_output -d tarName
```
