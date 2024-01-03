import { removeBackground } from '@imgly/background-removal-node';

const url = 'https://balonmano.isquad.es/images/afiliacion_clubs/2898/square_35723432687275366a39.jpg';
const publicPath = `file://${process.env.HOME}/MyProjects/bun-bg-removal/node_modules/@imgly/background-removal-node/dist/`;

try {
  const imgBg: ArrayBuffer = await removeBackground(url, {
    publicPath,
    model: 'medium',
    debug: true,
    progress: (key: any, current: any, total: any) => {
      console.log(`Downloading ${key}: ${current} of ${total}`);
    },
    output: {
      quality: 1
    }
  }).then((blob: Blob) => blob.arrayBuffer());

  Bun.write('imgBg.png', imgBg);
} catch (error) {
  console.error(error);
}