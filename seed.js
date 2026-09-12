// seed.js — one-time script to load temples.json into MongoDB
const db = require('./models');          // reuses your existing connection + Temple model
const templesData = require('./temples.json');

// Strip the "_id" field from every record.
// temples.json stores it as { "$oid": "..." } (MongoDB Extended JSON),
// which Mongoose can't cast to an ObjectId. Let Mongoose generate fresh _ids instead.
const cleaned = templesData.map(({ _id, ...rest }) => rest);

db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected. Seeding...');
    await db.temples.deleteMany({});          // clear old data so re-runs don't duplicate
    const result = await db.temples.insertMany(cleaned);
    console.log(`Inserted ${result.length} temples.`);
    process.exit(0);                          // seed scripts must exit; the connection stays open otherwise
  })
  .catch((err) => {
    console.error('Seed failed:', err);
    process.exit(1);
  });