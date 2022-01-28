import { useState, useEffect } from "react";
import { getMachines } from "../../services/machineApi";
import Machine from "../Machine/Machine";

const Machines = (props) => {

  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchMachines = async () => {
      const allMachines = await getMachines();
      setMachines(allMachines);
    }
    fetchMachines()
  }, [])


  return (
    <div className="machine-continer">
      <div className="machine-cards">
        {machines.map((machine, index) => {
          return (
            <Machine
              name={machine.name}
              comments={machine.comments}
              price={machine.price}
              id={machine.id}
              key={index}
            />
          )
        })}
      </div>

    </div>
  );
};

export default Machines;