import React from 'react';
import "./Sidebar.css";
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import SidebarRow from './SidebarRow';
import { HomeSharp, VideoLibrary } from '@mui/icons-material';
import { Whatshot } from '@mui/icons-material';
import { SubscriptionsSharp } from '@mui/icons-material';
function Sidebar() {
  return (

    <div className='sidebar'>
      <SidebarRow selected Icon={HomeSharp} title="Home " />
      <SidebarRow Icon={Whatshot} title="Trending " />
      <SidebarRow Icon={SubscriptionsSharp} title="Subscription " />
      <hr />
      <SidebarRow Icon={VideoLibrarySharpIcon} title="Library " />
      <SidebarRow Icon={HistorySharpIcon} title="History " />
      <SidebarRow Icon={OndemandVideoSharpIcon} title="Your videos " />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Watch later " />
      <SidebarRow Icon={ThumbUpAltSharpIcon} title="Liked ideos" />
      <SidebarRow Icon={ExpandMoreSharpIcon} title="Show more " />

    </div>
  );
}

export default Sidebar;