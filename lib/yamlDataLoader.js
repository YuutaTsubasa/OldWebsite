import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import process from 'process';

export const COMMUNITIES_DATA_FILE_NAME = "communitiesData.yml";
export const YOUTUBE_VIDEOS_DATA_FILE_NAME = "youtubeVideosData.yml";
export const WEEK_GALLERY_DATA_FILE_NAME = "weekGalleryData.yml";
export const YU_FRIENDS_ART_GALLERY_DATA_FILE_NAME = "yuFriendsArtGalleryData.yml";
export const YU_PAID_ART_GALLERY_DATA_FILE_NAME = "yuPaidArtGalleryData.yml";
export const MARSHMALLOW_GALLERY_DATA_FILE_NAME = "marshmallowGalleryData.yml";
export const ECPAY_GALLERY_DATA_FILE_NAME = "ecpayGalleryData.yml";
export const OPAY_GALLERY_DATA_FILE_NAME = "opayGalleryData.yml";
export const YOUTUBE_SUPER_CHAT_GALLERY_DATA_FILE_NAME = "youtubeSuperChatGalleryData.yml";
export const ACTIVITY_GALLERY_DATA_FILE_NAME = "activityGalleryData.yml";

export function loadYamlData(fileName) {
    let filePath = path.join(process.cwd(), 'data', fileName);
    return yaml.load(fs.readFileSync(filePath));
}