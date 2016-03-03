import path from 'path';

const files = path.join(__dirname, '..', 'files');

export default function(fs) {
  fs.copy(
    path.join(files, '**', '{*,.*}'), //take compiled path into account
    '.',
    {globOptions: {ignore: path.join(files, 'package.json')}}
  );
  fs.copyTpl(
    path.join(files, 'package.json'),
    'package.json',
    {name: path.basename(process.cwd())}
  )
}