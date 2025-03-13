export async function strapiGet(url: string, revalidate?: number) {
     try {
          const response = await fetch(url, {
               next: {
                    revalidate: revalidate || 0,
               },
          });
          return response.json();
     } catch (err) {
          return { error: true, msg: err };
     }
}
