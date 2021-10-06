DIR="mig33/inner.folder"
for file in $DIR/*.txt
do
    mv "$file" "${file%.txt}.dat"
done
