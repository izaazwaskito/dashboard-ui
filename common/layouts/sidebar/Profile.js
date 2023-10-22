import React, { useEffect, useState } from "react";
import profilpicture from "@/public/Frame.svg";
import Image from "next/image";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Profile = () => {
  let [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/account`)
      .then((response) => {
        setProfile(response.data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="col-md-12  container pe-8 ps-8">
        <div className="row">
          <div className="col-md-3  d-flex align-item-center justify-content-center p-0">
            <Image src={profilpicture} width={42} height={42} />
          </div>

          <>
            <div className="col-md-9 p-0">
              <div className="col-md-12 m-0">
                <p className="text-xl font-semibold text-cyan-950">
                  {isLoading ? (
                    <Skeleton width={190} height={22} />
                  ) : (
                    profile.name
                  )}
                </p>
              </div>
              <div className="col-md-12">
                <p className="text-sm font-normal text-gray-400">
                  {isLoading ? (
                    <Skeleton width={190} height={16} />
                  ) : (
                    profile.email
                  )}
                </p>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Profile;
