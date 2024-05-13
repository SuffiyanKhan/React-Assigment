function FeaturedCategory(img) {
  return (
    <div className=" border ms-3 p-5 rounded d-flex flex-column align-items-center justify-content-center" style={{ width: "18rem" }}>
      <img src={img.img} alt="" />
      <p className='mt-2 fw-semibold' style={{ color: 'gray' }} >{img.title}</p>
    </div>
  )
}

export default FeaturedCategory