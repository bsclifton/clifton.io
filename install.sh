export UPLOAD_DATE=`date +"%Y-%m-%d"`
pushd .
echo "MAKING DIRECTORY /srv/clifton.io-releases/$UPLOAD_DATE"
cd /srv/clifton.io-releases/
mkdir $UPLOAD_DATE
cd $UPLOAD_DATE
echo "EXTRACTING CONTENT"
tar -xzf ~brian/site.tar.gz .
rm ~brian/site.tar.gz
cd /srv/
echo "CREATING SYMLINK TO /srv/clifton.io-releases/$UPLOAD_DATE"
rm clifton.io
ln -s /srv/clifton.io-releases/$UPLOAD_DATE ./clifton.io
popd
