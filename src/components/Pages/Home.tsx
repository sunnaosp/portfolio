import { usePrismicDocumentByID, usePrismicDocumentByUID, usePrismicDocumentsByType } from '@prismicio/react';
import React from 'react';
import { ReactComponent as EmailIcon } from '../email.svg'
import { ReactComponent as LinkedinIcon } from '../linkedin.svg'
import { ReactComponent as CVIcon } from '../cv.svg'
import { ReactComponent as DribbbleIcon } from '../dribbble.svg'
import { ReactComponent as DribbbleIcon_white } from '../dribbble_white.svg'
import { ReactComponent as EmailIcon_white } from '../email_white.svg'
import { ReactComponent as LinkedinIcon_white } from '../linkedin_white.svg'
import { ReactComponent as CVIcon_white } from '../cv_white.svg'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  const frontPageDocumentByType = usePrismicDocumentsByType('frontpage');
  const [data, state] = usePrismicDocumentByUID('frontpage', 'frontpage');

  return (
    <div className="">
      {state.state !== 'loaded' ?
        (<p>loading</p>) : (
          <div className="flex flex-col gap-8 ">
            <Hero />
            <SelectedWorks items={data?.data.body[0].items} />
          </div>
        )
      }
    </div >
  );
}

const Hero = () => {
  const frontPageResult = usePrismicDocumentByUID('frontpage', 'frontpage');
  const frontPageData = frontPageResult[0]?.data;
  return <div className='flex flex-row w-full gap-14'>
    <div className="flex flex-col flex-1">
      <h1 className='text-6xl font-brand pb-16' dangerouslySetInnerHTML={{ __html: frontPageData?.title[0].text }} ></h1>
      <div className='border-t-2 border-brand max-w-min flex flex-row pt-4 gap-4'>
        <Icon to="https://www.linkedin.com/in/sunna-%C3%B6sp-%C3%BE%C3%B3rsd%C3%B3ttir-40491472/" color='bg-linkedIn'><LinkedinIcon_white /></Icon>
        <Icon to="http://mbl.is" color='bg-cv'><CVIcon_white /></Icon>
        <Icon to="http://mbl.is" color='bg-email'><EmailIcon_white /></Icon>
        <Icon to="https://dribbble.com/sunnaosp" color='bg-dribbble'><DribbbleIcon_white /></Icon>
      </div>
    </div>

    <img src={frontPageData?.hero_image.url} alt="logo" className='w-[447px]' />
  </div>
}


const Icon = ({ children, to, color }: { children: React.ReactNode, to: string, color: string }) => {
  return <a href={to}><div className={"rounded-full h-[55px] w-[55px] flex items-center justify-center " + color} > {children}</div></a >
}


const SelectedWorks = ({ items = [9] }: { items: any[] }) => {
  console.log(items)
  return <div className='flex flex-col items-center justify-center gap-6'>
    <h2 className='font-brand text-3xl flex items-center justify-center'>Other selected work</h2>
    <div className='flex flex-row flex-wrap max-w-[831px]'>
      {items.map(i => {
        return <Project projectId={i.featured_project.uid} />
      })}
    </div>
  </div>

}

const Project = ({ projectId }: { projectId: string }) => {
  const [data, state] = usePrismicDocumentByUID("project", projectId);
  return (<>
    {
      state?.state === 'loaded' ?
        (
          <Link to={`/project/${projectId}`}>
            <div className='w-[277px] h-[277px] flex items-center justify-center transition-colors' style={{ backgroundColor: data?.data?.background_color ? data?.data?.background_color : "#ffff" }}>
              <div className='w-[277px] h-[277px] opacity-0  flex items-end justify-center hover:opacity-100 hover:bg-opacity-50 absolute bg-black'>
                <p className='flex text-3xl text-white mb-8'>
                  {data?.data.project_name[0]?.text}
                </p>
              </div>
              <img src={data?.data.logo.url} />
            </div >
          </Link>
        )
        :
        (<div className='w-[277px] h-[277px] flex items-center justify-center bg-brand opacity-30 transition-colors'></div>)
    }
  </>
  )
}


export default Home;
