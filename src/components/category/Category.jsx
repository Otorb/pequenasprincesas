import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://pngimg.es/d/dress_PNG147.png',
        name: 'Vestidos'
    },
    {
        image: 'https://i.pinimg.com/originals/2e/b8/e1/2eb8e1bc9902fb644009c45242530c43.png',
        name: 'Jeans'
    },
    {
        image: 'https://assets.theplace.com/image/upload/l_ecom:assets:static:badge:set2,g_west,w_0.22,fl_relative/t_plp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3047888/3047888_1916.png',
        name: 'Conjuntos'
    },
    {
        image: 'https://img.lovepik.com/free-png/20211107/lovepik-a-woman-t-shirt-png-image_400468479_wh1200.png',
        name: 'Camisas'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-4">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-2 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-20 h-30 lg:w-30 lg:h-30 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-6">
                                            {/* Image tag  */}
                                            <img src={item.image}  alt="img"  />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;