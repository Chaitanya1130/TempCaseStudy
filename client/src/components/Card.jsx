import React from 'react'

const Card = () => {
  return (
    <div className="card" style="width: 18rem;">
        <img src="https://picsum.photos/200" class="card-img-top h-75" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card