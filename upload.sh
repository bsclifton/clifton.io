echo "BUILDING"
bundle exec jekyll build
pushd .
cd _site
echo "PACKAGING"
tar -czf ../site.tar.gz .
popd
scp ./site.tar.gz brian@clifton.io:~/
rm site.tar.gz
echo "UPLOAD COMPLETE"
