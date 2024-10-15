const GITHUB_API_URL = "https://api.github.com";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

async function searchGithub() {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `${GITHUB_API_URL}/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    return [];
  }
}

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    return null;
  }
};

export { searchGithub, searchGithubUser };