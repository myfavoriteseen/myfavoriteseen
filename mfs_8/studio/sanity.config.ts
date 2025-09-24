import { defineConfig } from 'sanity'
export default defineConfig({ name:'studio', title:'MyFavoriteSeen Studio', projectId:process.env.SANITY_PROJECT_ID, dataset:process.env.SANITY_DATASET||'production', schema:{ types: [] } })
