# Recursive LS (BONUS)

Write an ls that is "recursive".

This means that if one of the items is a directory, it will also show the files in that
directory.

So if you have this directory structure:

<pre>
  file0.txt
  dir1/
    file1.txt
    file2.txt
    dir2/
      file3.txt
      dir3/
        file4.txt
        file5.txt
      dir4/
        file6.txt
</pre>

It will show this:

<pre>
  file0.txt
  dir1/
  dir1/file1.txt
  dir1/file2.txt
  dir2/
  dir2/file3.txt
  dir2/dir3/
  dir2/dir3/file4.txt
  dir2/dir3/file5.txt
  dir2/dir4/
  dir2/dir4/file6.txt
</pre>
