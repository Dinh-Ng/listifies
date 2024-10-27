import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DataTable from '@/app/portal/components/data-table'
import { columnsQuestion, dataQuestion } from '@/app/portal/question/data'

const Question = () => {
  const TAB = {
    all: 'All',
    unanswered: 'Unanswered',
  }

  return (
    <div className="rounded p-2 shadow-lg">
      <Tabs defaultValue={TAB.all}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Blogs</h1>

          <div className="flex">
            <TabsList>
              <TabsTrigger value={TAB.all}>{TAB.all}</TabsTrigger>
              <TabsTrigger value={TAB.unanswered}>{TAB.unanswered}</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabContent value={TAB.all} />
        <TabContent value={TAB.unanswered} />
      </Tabs>
    </div>
  )
}

const TabContent = ({ value }: { value: string }) => {
  return (
    <TabsContent value={value}>
      {/* @ts-ignore */}
      <DataTable data={dataQuestion} columns={columnsQuestion} />
    </TabsContent>
  )
}

export default Question
