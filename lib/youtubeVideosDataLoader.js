import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import process from 'process';

const filePath = path.join(process.cwd(), 'data', 'youtubeVideosData.yaml');

export function getYoutubeVideosData() {
    return yaml.load(fs.readFileSync(filePath));
}