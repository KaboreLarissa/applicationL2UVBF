const token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWQ1OGQ3YjQyNjBlZjNkZjJjMjRmNDVmZmM5MzM1MiIsIm5iZiI6MTcyNzI4NDIwNi40MjY5NjUsInN1YiI6IjY2ZjQ0MTk3MGVjYTE3ZGExYjBkZmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ppdE3Fgd9S_WYnUm0Le9cJ0_i5EJsa9svCfEDoffyM";

const url = "https://api.themoviedb.org/3/movie/popular?language=fr-FR";

const detail_url = "https://api.themoviedb.org/3/movie/1022789?language=en-US";



//curl --request GET \
     //--url https://api.themoviedb.org/3/account/21538239 \
     //--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWQ1OGQ3YjQyNjBlZjNkZjJjMjRmNDVmZmM5MzM1MiIsIm5iZiI6MTcyNzI4NDIwNi40MjY5NjUsInN1YiI6IjY2ZjQ0MTk3MGVjYTE3ZGExYjBkZmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ppdE3Fgd9S_WYnUm0Le9cJ0_i5EJsa9svCfEDoffyM' \
     //-header 'accept: application/json'



export { token, url };
