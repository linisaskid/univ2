"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import { universities } from "@/lib/data"

type SortField = "rank" | "name" | "country" | "score"
type SortDirection = "asc" | "desc"

export function UniversityTable() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""
  const regionFilter = searchParams.get("region") || "all"

  const [sortField, setSortField] = useState<SortField>("rank")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  // Filter universities based on search and region
  const filteredUniversities = universities.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.country.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRegion = regionFilter === "all" || university.region === regionFilter

    return matchesSearch && matchesRegion
  })

  // Sort universities
  const sortedUniversities = [...filteredUniversities].sort((a, b) => {
    let comparison = 0

    if (sortField === "rank" || sortField === "score") {
      comparison = a[sortField] - b[sortField]
    } else {
      comparison = a[sortField].localeCompare(b[sortField])
    }

    return sortDirection === "asc" ? comparison : -comparison
  })

  // Handle sort
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px] cursor-pointer" onClick={() => handleSort("rank")}>
              <div className="flex items-center gap-1">
                Rank
                {sortField === "rank" &&
                  (sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </div>
            </TableHead>
            <TableHead className="w-[60px]">Logo</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
              <div className="flex items-center gap-1">
                University
                {sortField === "name" &&
                  (sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("country")}>
              <div className="flex items-center gap-1">
                Country
                {sortField === "country" &&
                  (sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("score")}>
              <div className="flex items-center gap-1">
                Score
                {sortField === "score" &&
                  (sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </div>
            </TableHead>
            <TableHead className="w-[100px] text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUniversities.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No universities found matching your criteria.
              </TableCell>
            </TableRow>
          ) : (
            sortedUniversities.map((university) => (
              <TableRow key={university.id}>
                <TableCell className="font-medium">
                  <Badge variant="outline">{university.rank}</Badge>
                </TableCell>
                <TableCell>
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={university.logo || "/placeholder.svg"}
                      alt={`${university.name} logo`}
                      width={40}
                      height={40}
                      quality={100}
                      priority={true}
                      loading="eager"
                      unoptimized={true}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
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
                      sizes="(max-width: 768px) 40px, 40px"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{university.name}</TableCell>
                <TableCell>{university.country}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 rounded-full bg-secondary">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${university.score}%`,
                          backgroundColor: university.color,
                        }}
                      />
                    </div>
                    <span>{university.score.toFixed(1)}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/universities/${university.id}`}>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View details</span>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-muted-foreground">
          Showing {sortedUniversities.length} of {universities.length} universities
        </div>
      </div>
    </div>
  )
}
