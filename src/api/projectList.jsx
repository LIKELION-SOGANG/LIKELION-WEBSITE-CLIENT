import axios from 'axios';

export async function projectList(generation_id) {
  try {
    const response = await axios.get(
      ` https://api.likelionsg.store/project/${generation_id}`,
    );
    return response.data.data.project_list;
  } catch (error) {
    console.error('Error fetching project data:', error);
    return [];
  }
}
