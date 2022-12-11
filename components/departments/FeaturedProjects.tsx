// type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';

// library
import React, { Fragment, useState } from 'react';

// code
import ProjectCard from '@components/departments/ProjectCard';

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState('21/22');
  const projectsByYear = projects.filter((project) => project.year === year);
  let projectArray = [];
  const chunkSize = 3;
  for (let i = 0; i < projectsByYear.length; i += chunkSize) {
    const chunk = projectsByYear.slice(i, i + chunkSize);
    projectArray[projectArray.length] = chunk;
  }

  return (
    <div className="sm:section-my">
      <div className="flex w-full flex-wrap rounded-[10px] bg-black p-3 sm:rounded-[20px] sm:p-6">
        <h2 className="text-center font-bold text-white sm:text-3xl">
          Featured Projects
        </h2>
        <h3 className="mt-1 ml-auto max-w-lg text-right text-xs text-white sm:text-lg">
          Key Highlights
        </h3>
      </div>

      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-dark relative"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-indicators mb-30 absolute right-0 bottom-0 left-0 flex justify-center p-0">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          {projectArray[1] && (
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            />
          )}
          {projectArray[2] && (
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            />
          )}
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className="mt-4 flex flex-wrap justify-center gap-16">
              {projectArray[0] &&
                projectArray[0].map(
                  ({ projectName, summary, projectImage }, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        coverImage={projectImage[0]}
                        cardDescription={summary}
                        name={projectName}
                      />
                    );
                  }
                )}
            </div>
          </div>

          {projectArray[1] &&
            projectArray[1].map(
              ({ projectName, summary, projectImage }, index) => {
                return (
                  <div className="carousel-item relative float-left w-full">
                    <div className="mt-4 flex flex-wrap justify-center gap-16">
                      <ProjectCard
                        key={index}
                        coverImage={projectImage[0]}
                        cardDescription={summary}
                        name={projectName}
                      />
                    </div>
                  </div>
                );
              }
            )}

          {projectArray[2] &&
            projectArray[2].map(
              ({ projectName, summary, projectImage }, index) => {
                return (
                  <div className="carousel-item relative float-left w-full">
                    <div className="mt-4 flex flex-wrap justify-center gap-16">
                      <ProjectCard
                        key={index}
                        coverImage={projectImage[0]}
                        cardDescription={summary}
                        name={projectName}
                      />
                    </div>
                  </div>
                );
              }
            )}
        </div>
        {projectArray[1] && (
          <div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 left-[-100px] flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next absolute top-0 bottom-0 right-[-100px] flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjects;
