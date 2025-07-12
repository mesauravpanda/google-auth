const fakeDB = {};

export async function findOrCreateUser(profile) {
  const id = profile.id || profile;
  if (!fakeDB[id]) {
    fakeDB[id] = {
      id,
      displayName: profile.displayName || 'Unknown',
      email: profile.emails ? profile.emails[0].value : 'N/A'
    };
    console.log('User signed up:', fakeDB[id]);
  } else {
    console.log('User logged in:', fakeDB[id]);
  }
  return fakeDB[id];
}
