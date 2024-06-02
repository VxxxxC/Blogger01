import React, { useId } from "react";
import Selector from "@components/TechIcons";
import Revamp from "./revamp";
import RevampMobile from "./revampMobile";
import NewFeature from "./newFeature";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import JobDemoTab, { type tabsPropsType } from "../../../components/jobDemoTab";
import { v4 as uuidv4 } from "uuid";

const Boxs = () => {
  const tabs: tabsPropsType[] = [
    {
      id: uuidv4(),
      label: "UI Revamp",
      content: <Revamp />,
    },
    {
      id: uuidv4(),
      label: "UI Revamp - Mobile Version",
      content: <RevampMobile />,
    },
    {
      id: uuidv4(),
      label: "New Features",
      content: <NewFeature />,
    },
  ];

  return (
    <div id="boxs" className="h-full w-full flex flex-col items-center">
      <div className="text-xl font-bold">BOXS - Frontend Developer</div>
      <div className="h-3/5 mobile:h-3/4 flex flex-rows mobile:flex-col justify-center content-center gap-2">
        <fieldset className="w-full flex flex-col items-center justify-center text-left p-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">
            Tech Stack and Framework
          </legend>
          <div className="grid grid-cols-2 mobile:grid-cols-1">
            <Selector props="Javascript" />
            <Selector props="Typescript" />
            <Selector props="NativeScript" />
            <Selector props="Nodejs" />
            <Selector props="Feathers.js" />
            <Selector props="MongoDB" />
          </div>
        </fieldset>
        {/* <fieldset className="w-full text-left p-5 rounded-lg bg-zinc-400 dark:bg-zinc-700"> */}
        {/*   <legend className="px-2 flex flex-start text-base font-medium"> */}
        {/*     Framework */}
        {/*   </legend> */}
        {/*   <li>Frontend - Vue.js, Nuxt.js</li> */}
        {/*   <li>App Development - NativeScript</li> */}
        {/*   <li>Backend - feathers.js, MongoDB</li> */}
        {/* </fieldset> */}
        <fieldset className="h-full w-full overflow-x-auto overflow-y-scroll scroll-smooth text-left p-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">Duty</legend>
          <div className="px-5 flex flex-col gap-y-5">
            <li>
              Participating company Website, iOS/Android App UI, POS System UI
              revamp, according from desigers Figma design
            </li>
            <li>Create reuseable UI components</li>
            <li>
              Collaborating with Designers, Project Manager, and CS team to
              defining UX flow for shipping new features on POS system
            </li>
            <li>
              Perform bug fix for old UI components or client reported issue
            </li>
          </div>
        </fieldset>
      </div>

      <div className="mt-5">
        <fieldset className="h-[65vh] w-full overflow-x-hidden overflow-y-scroll scroll-smooth text-left p-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">Demo</legend>
          <JobDemoTab tabs={tabs} />
        </fieldset>
      </div>
    </div>
  );
};

export default Boxs;
