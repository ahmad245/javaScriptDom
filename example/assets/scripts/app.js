// let btn=document.querySelector('header').lastElementChild; bad if i change structure
const btn = document.querySelector('header button');

const modal = document.getElementById('add-modal');

const backdrop = document.getElementById('backdrop');

const btnCancel = document.querySelector('.btn--passive');

const btnConfirm = btnCancel.nextElementSibling;

const inputs = modal.querySelectorAll('input');

const titleHeader=document.getElementById('entry-text');
const movieList=document.getElementById('movie-list');

const deleteModal=document.getElementById('delete-modal');

const btnCancelDeletion=deleteModal.querySelector('.btn--passive');
let btnConfirmlDeletion=deleteModal.querySelector('.btn--danger');

let movies=[];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}
const cancleMovieModel = () => {
    modal.classList.remove('visible');
    toggleBackdrop();
}
const addMovieModel = () => {
    modal.classList.add('visible');
    toggleBackdrop();
}
const backdropClickHandler = () => {
    cancleMovieModel();
    closeMovieDeletionModel();
    toggleBackdrop();
}

const btnCancelHandler = () => {
    cancleMovieModel();
}
const closeMovieDeletionModel=()=>{
    deleteModal.classList.remove('visible'); 
    toggleBackdrop();
}
const updateUI=()=>{
    if(movies.length>0){
        titleHeader.classList.add('unvisible');
       
    }
}
const removeMovie=(id)=>{
    console.log(id);
    
    let element= movies.findIndex(el=>el.id==id);
    movies.splice(element,1);
    console.log(movies);
    movieList.children[element].remove();
    closeMovieDeletionModel()
}
const removeHandler=(id)=>{
 
    
   deleteModal.classList.add('visible'); 
   toggleBackdrop();

   btnConfirmlDeletion.replaceWith(btnConfirmlDeletion.cloneNode(true));
   console.log(btnConfirmlDeletion);
   
   btnConfirmlDeletion=deleteModal.querySelector('.btn--danger');
   console.log(btnConfirmlDeletion);

   btnCancelDeletion.removeEventListener('click',closeMovieDeletionModel)
   btnCancelDeletion.addEventListener('click',closeMovieDeletionModel);
   btnConfirmlDeletion.addEventListener('click',removeMovie.bind(null,id))
  
  
}
const render=(movie)=>{
    console.log(movies);
    
    if(movies.length>0){
       
        let li=document.createElement('li');
        li.className='movie-element';
        li.innerHTML=`
        <div class="movie-element__image">
          <img src="${movie.img}" alt="${movie.img}">
        </div>
        <div class="movie-element__info">
          <h2>${movie.title}</h2>
          <p>${movie.rating} /5 star</p>
        </div>
        `;
        li.addEventListener('click',removeHandler.bind(null,movie.id))
        movieList.appendChild(li)
       
    }
}
const resete=()=>{
    inputs[0].value="";
    inputs[1].value="";
    inputs[2].value="";
}
const btnConfirmHandler = () => {
    let title = inputs[0].value;
    let img = inputs[1].value;
    let rating = inputs[2].value;
    if (title.trim() === '' || img.trim() === '' || rating.trim() === '' || +rating < 1 + rating > 5) {
        alert('please insert all input ')
        return;
    }
    let id=Math.random();
    movies.push({id,title,img,rating});
    updateUI()
    render({id,title,img,rating})
   resete();
   cancleMovieModel();
    
   
}


btn.addEventListener('click', addMovieModel);
backdrop.addEventListener('click', backdropClickHandler);
btnCancel.addEventListener('click', btnCancelHandler);
btnConfirm.addEventListener('click', btnConfirmHandler)