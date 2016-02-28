import path from 'path';

export default function(fs, config) {
  fs.copy(
    path.join(__dirname, '..', 'files', '**', '{*,.*}'), //take compiled path into account
    '.',
    {globOptions: {ignore: '.DS_Store'}}
  );
}