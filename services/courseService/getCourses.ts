export default async function getCourses(Courses: (data: any[]) => void){
  const query = `
  query {
    getCourses {
      id
      imageUrl
      title
      authors {
        name
      }
      prices {
        discountPrice
        price
      }
      hours
      likes
      likesInPercent
    }
  }
  `; 
    
  try {
    const res = await fetch('http://localhost:5180/graphql', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    });

    console.log(res);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await res.json();
    Courses(data.data.getCourses);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};