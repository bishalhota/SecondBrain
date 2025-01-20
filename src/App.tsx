
import './App.css'
import { Button } from "./component/ui/Button";
import { PlusIcon } from './icons/plusicon';


function App() {
  return (
    <>
      <Button startIcon={<PlusIcon />} size="sm" text="share" variant="primary"/>
      <Button size="md" text="add content" variant="secondary"/>
      <Button size="lg" text="add content" variant="secondary"/>
    </>
  )
}

export default App
