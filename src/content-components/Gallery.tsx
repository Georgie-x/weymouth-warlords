import { ChangeEvent, useState, useEffect } from "react";
import { supabase } from "../supabase/supabase-client";
import { demo, demo2 } from "../utils/db";
import construct from "../assets/construc.png"

type FileObject = {
    bucket_id: string;
    created_at: string;
    id: string;
    last_accessed_at: string;
    metadata: Record<string, any>;
    name: string;
    owner: string;
    updated_at: string;
};

type SupabaseListResponse = 
    | { data: FileObject[]; error: null }
    | { data: null; error: StorageError };

interface StorageError {
    message: string;
}

function Gallery() {
    const [album, setAlbum] = useState<string[]>(demo);
    const [supabaseImages, setSupabaseImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchSupabaseImages = async () => {
            const { data, error }: SupabaseListResponse = await supabase.storage.from("images").list("");

            if (error) {
                console.error("Error fetching images:", error);
                return;
            }

            if (data && Array.isArray(data)) {
                const urls = data.map((file) => {
                    const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(file.name);

                    // Safely access publicUrl
                    return publicUrlData?.publicUrl || ""; 
                });

                setSupabaseImages(urls);
            }
        };

        fetchSupabaseImages();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        if (selectedValue === "demo") {
            setAlbum(demo);
        } else if (selectedValue === "demo2") {
            setAlbum(demo2);
        } else if (selectedValue === "supabase") {
            setAlbum(supabaseImages);
        }
    };

    return (
 
            
        <section className='gallery'>
            <h2>Gallery</h2><img className="construction" src={construct}></img>
            {/* <div className='flex-across'>
                <label htmlFor='gallery'>Choose an album: </label>
                <select className='select' name='gallery' id='gallery' onChange={handleChange}>
                    <option value='demo'>Rad Pic Demo</option>
                    <option value='demo2'>Ace Pic Demo 2</option>
                    <option value='supabase'>Supabase Gallery</option>
                </select>
            </div>
            <div className='image-grid'>
                {album.map((imagePath, index) => (
                    <img key={index} src={imagePath} alt='gallery photo' />
                ))}
            </div> */}
        </section>

    );
}

export default Gallery;
