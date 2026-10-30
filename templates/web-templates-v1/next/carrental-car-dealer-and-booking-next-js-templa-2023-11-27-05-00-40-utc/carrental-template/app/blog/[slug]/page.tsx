import Image from "next/image";
import { getPostData } from "@/lib/posts";
import SectionWrapper from "@/app/_sections/section-wrapper";
import PageTitle from "@/app/_sections/page-title";
import Sidebar from "@/app/_sections/sidebar";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const postData = await getPostData(params.slug);
  const title = postData.title;
  const desc = postData.excerpt;
  return {
    title: title,
    description: desc,
  };
}

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.slug);
  return (
    <>
      <PageTitle title={postData.title} />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2 lg:gap-8">
          <article className="col-span-1 md:col-span-2">
            <div className="grid gap-6">
              {postData.image && (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={postData.image}
                    fill
                    alt="Post Image"
                    className="object-cover"
                  />
                </div>
              )}
              <div
                className="prose max-w-none overflow-hidden"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>
          </article>
          <div>
            <Sidebar />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
