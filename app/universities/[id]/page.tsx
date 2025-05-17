import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronLeft, MapPin, Trophy, Users, BookOpen, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { universities } from "@/lib/data"
import { theme } from "@/lib/theme"

export function generateStaticParams() {
  return universities.map((university) => ({
    id: university.id.toString(),
  }))
}

export default function UniversityPage({ params }: { params: { id: string } }) {
  const university = universities.find((u) => u.id.toString() === params.id)

  if (!university) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link href="/" className="inline-block mb-6">
        <Button variant="ghost" className="gap-2 pl-0">
          <ChevronLeft className="h-4 w-4" />
          Back to Rankings
        </Button>
      </Link>

      <div className="grid gap-6">
        <div>
          <Card className="overflow-hidden">
            <div className="h-40 w-full relative">
              <Image
                src={university.banner}
                alt={`${university.name} campus`}
                fill
                quality={100}
                priority={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                  <Image
                    src={university.logo || "/placeholder.svg"}
                    alt={`${university.name} logo`}
                    width={70}
                    height={70}
                    quality={100}
                    className="object-cover rounded-full"
                    style={{
                      objectPosition:
                        university.id === 1 ? "center 30%" : // Harvard (zoom in vertically)
                        university.id === 9 ? "center" : // Imperial College London (default)
                        university.id === 11 ? "center" : // NUS (default)
                        university.id === 19 ? "center" : // São Paulo (default)
                        university.id === 6 ? "center" : // Caltech (default)
                        "center",
                    }}
                    priority={true}
                    sizes="(max-width: 768px) 70px, 70px"
                  />
                </div>
                <Badge variant="outline" className="text-lg bg-black text-white px-4 py-1">
                  Rank #{university.rank}
                </Badge>
              </div>
            </div>
            <CardHeader className="pt-16">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{university.name}</CardTitle>
                  <div className="flex items-center mt-2 text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {university.city}, {university.country}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-2xl font-medium px-3 py-1 rounded-md"
                    style={{
                      backgroundColor: university.color,
                      color: "#ffffff",
                    }}
                  >
                    {university.score.toFixed(1)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Overall Score</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h3>About {university.name}</h3>
                <p>{university.description}</p>

                <h3>Key Statistics</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-4">
                  <div className="flex items-center gap-2 rounded-lg border p-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Students</div>
                      <div className="text-xl">{university.studentCount.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Faculty</div>
                      <div className="text-xl">{university.facultyCount.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-3">
                    <Trophy className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Founded</div>
                      <div className="text-xl">{university.foundedYear}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Majors</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {university.majors.map((major, index) => (
                        <div 
                          key={index} 
                          className="p-4 rounded-lg border transition-all duration-200 hover:border-[#5C69D2] hover:bg-[#5C69D2]/5"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-lg">{major.name}</h4>
                              <span className="text-sm text-muted-foreground">{major.duration}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{major.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Qualifications</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {university.qualifications.map((qual, index) => (
                        <div 
                          key={index} 
                          className="p-4 rounded-lg border transition-all duration-200 hover:border-[#5C69D2] hover:bg-[#5C69D2]/5"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-lg">{qual.level}</h4>
                              <span className="text-sm text-muted-foreground">{qual.duration}</span>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium mb-2">Requirements:</h5>
                              <ul className="space-y-1.5">
                                {qual.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-[#5C69D2]">•</span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(university.metrics).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                        <span className="text-sm">{value}/100</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-secondary">
                        <div
                          className="h-1.5 rounded-full transition-all duration-200"
                          style={{
                            width: `${value}%`,
                            backgroundColor: university.color,
                            '&:hover': {
                              backgroundColor: '#5C69D2',
                            },
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Website</div>
                      <a
                        href={`https://${university.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline transition-colors duration-200 hover:text-[#5C69D2]"
                        style={{ color: university.color }}
                      >
                        {university.website}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-muted-foreground">{university.address}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
