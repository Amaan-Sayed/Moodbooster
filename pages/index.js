import { useState, useEffect } from 'react';
import { VIDEOS } from '../components/constants';
import Timer from '../components/Timer';
import Badge from '../components/Badge';
import Cookie from 'js-cookie';
import { parseCookies } from '../components/parseCookies';
import { parseISO, startOfTomorrow } from 'date-fns';

const Home = ({ initialSelectedValue, initialVidsValue, initialTmrwValue }) => {
  let random = Math.floor(Math.random() * VIDEOS.length);
  const [loading, setLoading] = useState(true);
  const [selectedVid, setSelectedVid] = useState(initialSelectedValue);
  const [vidsLeft, setVidsLeft] = useState(parseInt(initialVidsValue));
  const [tomorrow, setTomorrow] = useState(initialTmrwValue);

  useEffect(() => {
    const initialVid = VIDEOS[random];

    Cookie.set('selectedVid', !selectedVid ? initialVid : selectedVid);
    !selectedVid && setSelectedVid(initialVid);

    Cookie.set('vidsValue', !vidsLeft && vidsLeft !== 0 ? 2 : vidsLeft);
    !vidsLeft && vidsLeft !== 0 && setVidsLeft(2);

    Cookie.set(
      'tomorrow',
      !tomorrow ? startOfTomorrow().toISOString() : tomorrow
    );
    !tomorrow && setTomorrow(startOfTomorrow().toISOString());

    setLoading(false);
  }, [vidsLeft, selectedVid, tomorrow]);

  return loading ? (
    <div className="bg-gray-900 text-center text-5xl text-white pt-12 h-screen font-extralight">
      Loading...
    </div>
  ) : (
    <div className="flex flex-col h-screen items-center bg-gray-900">
      <div className="text-5xl mt-12 text-gray-50 mb-10 font-extralight">
        Moodbooster
      </div>
      {/* Youtube Player */}
      <iframe
        id="vid"
        title="video"
        className="w-1/2 h-1/2"
        src={`https://www.youtube.com/embed/${selectedVid}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* New Vlog Button */}
      {parseInt(vidsLeft) !== 0 ? (
        <div>
          <button
            className="rounded bg-teal-400 px-10 py-3 mt-10 text-xl hover:bg-teal-600 transition-all duration-200 focus:outline-none"
            onClick={() => {
              setSelectedVid(VIDEOS[random]);
              setVidsLeft(parseInt(vidsLeft) - 1);
            }}
          >
            New Vlog!
          </button>
          <p className="text-xl text-white mt-10 text-center">
            {vidsLeft} vlogs left today
          </p>
        </div>
      ) : (
        <Timer
          tomorrow={tomorrow}
          setTomorrow={setTomorrow}
          resetVids={() => {
            setSelectedVid(VIDEOS[random]);
            setVidsLeft(2);
          }}
        />
      )}
      <Badge />
    </div>
  );
};

Home.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialSelectedValue: cookies.selectedVid,
    initialVidsValue: cookies.vidsValue,
    initialTmrwValue: cookies.tomorrow,
    cookies
  };
};

export default Home;

// import React from 'react';
// import { VIDEOS } from '../components/constants';
// import { useStickyState } from '../components/useStickyState';
// import Timer from '../components/Timer';

// const Main = () => {
//   let random = Math.floor(Math.random() * VIDEOS.length);
//   const [selectedVid, setSelectedVid] = useStickyState(
//     VIDEOS[random],
//     'selectedVid'
//   );
//   const [vidsLeft, setVidsLeft] = useStickyState(2, 'vidsLeft');

//   return (
//     <div className="main">
//       {/* Youtube Player */}
//       <iframe
//         id="vid"
//         title="video"
//         className="youtubeDiv"
//         src={`https://www.youtube.com/embed/${selectedVid}?autoplay=1`}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       />

//       {/* New Vlog Button */}
//       {vidsLeft !== 0 ? (
//         <div>
//           <button
//             className="button"
//             onClick={() => {
//               setSelectedVid(VIDEOS[random]);
//               setVidsLeft(vidsLeft - 1);
//             }}
//           >
//             New Vlog!
//           </button>
//           <p className="amount">{vidsLeft} vlogs left today</p>
//         </div>
//       ) : (
//         <Timer
//           resetVids={() => {
//             setSelectedVid(VIDEOS[random]);
//             setVidsLeft(2);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Main;
