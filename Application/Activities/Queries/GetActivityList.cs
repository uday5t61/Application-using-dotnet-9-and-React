using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities.Queries
{
    public  class GetActivityList
    {
        public class Query: IRequest<List<Activity>> { }
        public class Handler(AppDbContext context,ILogger<GetActivityList> logger) : IRequestHandler<Query, List<Activity>>
        {
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                //Cancellation token demostration
                //try
                //{
                //    for (int i = 0; i < 10; i++)
                //    {
                //        cancellationToken.ThrowIfCancellationRequested();
                //        await Task.Delay(1000, cancellationToken);
                //        logger.LogInformation($"Completed {i} task");
                //    }
                //}
                //catch
                //{
                //    logger.LogInformation($"Task Cancelled");

                //}

                return await context.Activities.ToListAsync(cancellationToken);
            }
        }

    }
}
