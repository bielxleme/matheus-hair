import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'gallery');

const files = fs.readdirSync(GALLERY_DIR).filter(f => f.endsWith('.jpg'));

console.log(`Otimizando ${files.length} imagens...`);

for (const file of files) {
  const inputPath = path.join(GALLERY_DIR, file);
  const outputPath = path.join(OUTPUT_DIR, file.replace('.jpg', '-opt.jpg'));
  
  const stats = fs.statSync(inputPath);
  const sizeBefore = (stats.size / 1024).toFixed(1);
  
  await sharp(inputPath)
    .resize(800, 1000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 75, progressive: true, mozjpeg: true })
    .toFile(outputPath);
  
  const statsAfter = fs.statSync(outputPath);
  const sizeAfter = (statsAfter.size / 1024).toFixed(1);
  const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);
  
  console.log(`${file}: ${sizeBefore}KB → ${sizeAfter}KB (-${reduction}%)`);
  
  // Substituir original
  fs.renameSync(outputPath, inputPath);
}

console.log('✅ Otimização concluída!');