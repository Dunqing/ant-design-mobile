import React from 'react'
import { Button, Space, Steps } from 'antd-mobile'
import { DemoBlock } from 'demos'
import {
  CheckCircleFill,
  ClockCircleFill,
  HandPayCircleOutline,
} from 'antd-mobile-icons'

const { Step } = Steps

export default () => {
  return (
    <>
      <DemoBlock title='横向'>
        <Steps current={1}>
          <Step title='标题1' description='描述' />
          <Step title='标题2' description='描述' />
          <Step title='标题3' description='描述' />
        </Steps>
      </DemoBlock>

      <DemoBlock title='横向（失败状态）'>
        <Steps current={2}>
          <Step title='第一步' />
          <Step title='第二步' />
          <Step title='第三步' status='error' />
          <Step title='第四步' />
        </Steps>
      </DemoBlock>

      <DemoBlock title='纵向'>
        <Steps direction='vertical'>
          <Step title='填写机构信息' status='process' />
          <Step title='签约机构' status='wait' />
          <Step title='关联服务区' status='wait' />
        </Steps>
      </DemoBlock>

      <DemoBlock title='纵向（失败状态）'>
        <Steps direction='vertical'>
          <Step
            title='填写机构信息'
            status='finish'
            description='完成时间：2020-12-01 12:30'
          />
          <Step
            title='签约机构'
            status='finish'
            description='完成时间：2020-12-01 12:30'
          />
          <Step
            title='关联服务区'
            status='finish'
            description='完成时间：2020-12-01 12:30'
          />
          <Step title='审批失败' status='error' />
        </Steps>
      </DemoBlock>

      <DemoBlock title='自定义图标和大小'>
        <Steps
          direction='vertical'
          current={1}
          style={{
            '--title-font-size': '17px',
            '--description-font-size': '15px',
            '--indicator-margin-right': '12px',
            '--icon-size': '22px',
          }}
        >
          <Step
            title='填写机构信息'
            description='这里是一些描述'
            icon={<CheckCircleFill />}
          />
          <Step
            title='签约机构'
            description={
              <Space block direction='vertical'>
                <div>这里是一些描述</div>
                <Button color='primary'>去查看</Button>
              </Space>
            }
            icon={<ClockCircleFill />}
          />
          <Step
            title='关联服务区'
            description='这里是一些描述'
            icon={<HandPayCircleOutline />}
          />
        </Steps>
      </DemoBlock>
    </>
  )
}
