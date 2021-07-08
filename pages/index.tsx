import {Htag} from "components/Htag/Htag";
import {Button} from "components/Button/Button";
import {P} from "components/P/P";
import {Tag} from "components/Tag/Tag";
import {useState} from "react";
import {Rating} from "components/Rating/Rating";
import {withLayout} from "Layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios'
import {MenuItem} from "interfaces/menu.interfaces";

function Home({menu}: HomeProps): JSX.Element  {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(2)

  console.log(menu)
  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button className='asdf' onClick={()=> setCounter(counter + 1)} appearance={"primary"}>JJJ</Button>
      <Button arrow={'down'} onClick={()=> setCounter(counter - 1)} appearance={"ghost"}>JJJ</Button>
      <P size={'big'}>pppppppp</P>
      <P size={'normal'}>pppppppp</P>
      <P size={'small'}>pppppppp</P>
      <Tag size={'normal'} color={'red'}>nnn</Tag>
      <Tag size={'normal'} color={'ghost'} href={'www.google.ru'}>sdg</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  )
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'menu/');
  console.log(menu);
  return {
    props: {
      menu,
      firstCategory
    }
  }
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem,
  firstCategory: number
}