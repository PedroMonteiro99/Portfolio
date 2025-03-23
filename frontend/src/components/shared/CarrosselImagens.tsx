import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

export interface CarrosselImagensProps {
	imagens: string[];
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
	return (
		<Carousel
			opts={{
				loop: true,
			}}
			className="xl:w-full md:w-11/12 w-7/10"
		>
			<CarouselContent>
				{props.imagens.map((imagem, index) => (
					<CarouselItem key={imagem} className="relative h-96 w-full">
						<Image src={imagem} alt={`Imagem ${index}`} fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
