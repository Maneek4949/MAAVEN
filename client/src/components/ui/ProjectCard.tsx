import img1 from "../../assets/image/1.webp";
import img2 from "../../assets/image/2.webp";
import img3 from "../../assets/image/3.webp";
import img4 from "../../assets/image/a1 (1).jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

function ProjectCard() {
  return (
    <div className="w-64 h-98 my-20 group overflow-hidden grid grid-rows-4 gap-2">
      {/* Image */}
      <div className="w-full  row-span-3 relative overflow-hidden">
        <div className="w-full h-full flex justify-center">
          <img
            className="rounded-xl object-contain h-full w-full"
            src={img1}
            alt="igm1"
          />
          {/* Add to Cart */}
          <div className="h-20 w-52 bg-slate-300 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl border absolute top-80 py-1 px-1.5 group-hover:top-72 transition-all duration-500 ease-in-out group-hover:hover:top-56 peer">
            <div className=" py-1 flex justify-between border-b-2 border-gray-400"><h5 className="font-enter font-bold text-sm">QUICK ADD</h5>
                  <button className="font-enter font-bold"><FiPlus/></button></div>
          <div className="grid grid-cols-5 gap-2 px-1 py-3">
            <button className="font-enter font-bold text-sm bg-inherit hover:bg-slate-300 rounded-sm  p-0.5">XS</button>
            <button className="font-enter font-bold text-sm bg-inherit hover:bg-slate-300 rounded-sm  p-0.5" >S</button>
            <button className="font-enter font-bold text-sm bg-inherit hover:bg-slate-300 rounded-sm p-0.5" >M</button>
            <button className="font-enter font-bold text-sm bg-inherit hover:bg-slate-300 rounded-sm p-0.5" >L</button>
            <button className="font-enter font-bold text-sm bg-inherit hover:bg-slate-300 rounded-sm p-0.5" >XL</button>
          </div>
          </div>
        {/* Arrow */}
        <div className="w-[310px] absolute bottom-20 flex justify-between group-hover:w-52 peer-hover:w-[310px] transition-all duration-500 ease-in-out">
            <button className="bg-gray-100 hover:bg-gray-300 rounded-full p-0.5  
            "> <MdKeyboardArrowLeft size={20}  /></button>
          <button className="bg-gray-100 hover:bg-gray-300 rounded-full p-0.5 "> <MdKeyboardArrowRight size={20}   /></button>
        </div>
  
        </div>

      </div>
      {/* Details */}
      <div>
        <ul className="group-hover:hidden">
          <li className="font-enter text-sm font-extrabold">Cros Bucket Hat</li>
          <li className="font-enter text-[12px] font-extrabold text-gray-700">
            <span>Black</span>
            <span className="ml-2 text-white bg-gray-800 rounded-md py-0.5 px-1 font-normal">
              4 color
            </span>
          </li>
          <li className="font-enter text-[12px] font-extrabold text-gray-800">
            $47.00
          </li>
        </ul>

        <div className="hidden w-ful rounded-lg group-hover:flex justify-center w-full bg-slate-300 bg-opacity-60 backdrop-filter backdrop-blur-lg border">
          <div>
            <img className="rounded-lg p-1" width={70} height={70} src={img2} />
          </div>
          <div>
            <img className="rounded-lg p-1" width={70} height={70} src={img3} />
          </div>
          <div>
            <img className="rounded-lg p-1" width={70} height={70} src={img2} />
          </div>
          <div>
            <img className="rounded-lg p-1" width={70} height={70} src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
