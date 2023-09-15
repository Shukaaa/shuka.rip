import {ProjectTag} from "../enums/project-tag";
import {TechnologyTag} from "../enums/technology-tag";

export type Project = {
    name: string;
    description: string;
    link: string;
    repository: string;
    image: string;
    tags: ProjectTag[];
    technologies: TechnologyTag[];
}
