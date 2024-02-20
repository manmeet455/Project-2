import { Card } from "./Card";

export const Index = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-5 place-items-center">

        <div className="ml-3">
        <div className="bg-cyan-400	text-start p-1">New</div>
        <div className="mt-5">
          <Card />
        </div>
        </div>

        <div>
        <div className="bg-cyan-400	text-start w-52 p-1">In progress</div>
        <div>
          {/* <Card /> */}
        </div>
        </div>
        
        <div className="bg-cyan-400	text-start w-52 p-1">Finished</div>
        <div className="bg-cyan-400	text-start w-52 p-1">Four</div>
        <div className="bg-cyan-400	text-start w-52 p-1">Fifth</div>
      </div>
    </div>
  )
}

export default Index;
