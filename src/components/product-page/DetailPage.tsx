export const DetailPage=()=>{
    return  <div className="container py-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            {/* Product Card */}
            <div className="card shadow-sm rounded">
                {/* Product Image */}
                <img
                    src={"https://picsum.photos/1920/600"}
                    alt={'this is image'}
                    className="card-img-top rounded"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />

                {/* Card Body */}
                <div className="card-body text-center">
                    {/* Product Title */}
                    <h5 className="card-title">my bike</h5>

                    {/* Product Price */}
                    <p className="card-text text-success">100 rupess</p>

                    {/* Product Description */}
                    <p className="card-text text-muted">this is description</p>

                    {/* Buy Now Button */}
                    <button className="btn btn-primary btn-lg">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
}